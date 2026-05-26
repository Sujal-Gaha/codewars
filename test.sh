#!/bin/bash

# Get the absolute path to the project root
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
PYTHON_DIR="$PROJECT_ROOT/python"
PYTHON_VENV_DIR="$PYTHON_DIR/codewars-python"
TYPESCRIPT_DIR="$PROJECT_ROOT/typescript"

activate_venv() {
    if [ ! -d "$PYTHON_VENV_DIR" ]; then
        echo "Virtual environment not found at $PYTHON_VENV_DIR. Creating one..."
        if ! command -v python3 &> /dev/null; then
            echo "Error: python3 is not installed."
            return 1
        fi
        python3 -m venv "$PYTHON_VENV_DIR"
        source "$PYTHON_VENV_DIR/bin/activate"
        pip install --upgrade pip
        pip install pytest
        echo "Virtual environment created and dependencies installed."
    else
        source "$PYTHON_VENV_DIR/bin/activate"
    fi
}

# If the script is being sourced from bash or zsh, just activate the venv and exit the script
if [ -n "$BASH_VERSION" ] || [ -n "$ZSH_VERSION" ]; then
    if [[ "${BASH_SOURCE[0]}" != "${0}" ]]; then
        activate_venv
        return 0 2>/dev/null
    fi
fi

run_python_test() {
    echo "Starting python test..."
    cd "$PYTHON_DIR" || exit
    activate_venv || exit 1
    
    # Run tests for all kyu directories that have a test folder
    local found_tests=false
    for kyu_dir in *kyu; do
        if [ -d "$kyu_dir/test" ]; then
            echo "--- Running tests for $kyu_dir ---"
            PYTHONPATH="$kyu_dir" pytest -v "$kyu_dir/test"
            found_tests=true
        fi
    done
    
    if [ "$found_tests" = false ]; then
        echo "No python tests found."
    fi
}

run_typescript_test() {
    echo "Starting typescript test..."
    cd "$TYPESCRIPT_DIR" || exit
    
    if [ ! -d "node_modules" ]; then
        echo "node_modules not found. Installing dependencies with yarn..."
        if ! command -v yarn &> /dev/null; then
            echo "Error: yarn is not installed."
            return 1
        fi
        yarn install
    fi
    
    yarn test
}

update_readme() {
    echo "Updating README.md..."
    python3 "$PROJECT_ROOT/scripts/update_readme.py"
}

show_activation_commands() {
    echo ""
    echo "To activate the virtual environment in your current shell:"
    echo "  Bash/Zsh: source test.sh"
    echo "  Fish:     source python/codewars-python/bin/activate.fish"
    echo ""
}

choose_test() {
    echo "Which action do you want to perform?"
    echo "1) Run Python tests"
    echo "2) Run TypeScript tests"
    echo "3) Run all tests"
    echo "4) Update README dashboard"
    echo "5) Show activation commands"
    echo "6) Exit"
    read -rp "Enter choice [1-6]: " choice

    case $choice in
        1) run_python_test ;;
        2) run_typescript_test ;;
        3) run_python_test && run_typescript_test ;;
        4) update_readme ;;
        5) show_activation_commands; choose_test ;;
        6) echo "Exiting..."; exit 0 ;;
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