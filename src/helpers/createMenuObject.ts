type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

function createMenuObject(activeMenu: MenuOptions) {
  let options = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }

  if (activeMenu !== '') {
    options[activeMenu] = true
  }

  return options
}

export { createMenuObject }
