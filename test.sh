PROJECT_ROOT="$HOME/programming/personal/codewars"
PYTHON_DIR="$PROJECT_ROOT/python"
PYTHON_VENV_DIR="$PYTHON_DIR/codewars-python"
TYPESCRIPT_DIR="$PROJECT_ROOT/typescript"

activate_venv() {
    if [ -f "$PYTHON_VENV_DIR/bin/activate" ]; then
        source "$PYTHON_VENV_DIR/bin/activate"
    else
        echo "Virtual environment not found at $PYTHON_VENV_DIR"
        exit 1
    fi
}

run_python_test() {
    echo "Starting python test..."
    cd "$PYTHON_DIR" || exit
    activate_venv
    PYTHONPATH=8kyu pytest -v
}

run_typescript_test() {
    echo "Starting typescript test..."
    cd "$TYPESCRIPT_DIR" || exit
    yarn test
}

update_readme() {
    echo "Updating README.md..."
    python3 "$PROJECT_ROOT/scripts/update_readme.py"
}

choose_test() {
    echo "Which action do you want to perform?"
    echo "1) Run Python tests"
    echo "2) Run TypeScript tests"
    echo "3) Run all tests"
    echo "4) Update README dashboard"
    echo "5) Exit"
    read -rp "Enter choice [1-5]: " choice

    case $choice in
        1) run_python_test ;;
        2) run_typescript_test ;;
        3) run_python_test && run_typescript_test ;;
        4) update_readme ;;
        5) echo "Exiting..."; exit 0 ;;
        *) echo "Invalid choice"; choose_test ;;
    esac
}


PARAM="$1"

case $PARAM in
    python) run_python_test ;;
    typescript) run_typescript_test ;;
    update) update_readme ;;
    "" ) choose_test ;;
    *) echo "Invalid parameter. Use: python | typescript | update" ; exit 1 ;;
esac