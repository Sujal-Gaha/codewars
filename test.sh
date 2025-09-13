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

run_python_test
run_typescript_test