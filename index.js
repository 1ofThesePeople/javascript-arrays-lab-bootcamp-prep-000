const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(cat) {
  return kittens.push(cat)
}

function destructivelyPrependKitten(cat) {
  return kittens.unshift(cat)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(cat) {
  return [...kittens, cat]
}

function prependKitten(cat) {
  return [cat, ...kittens]
}

function removeLastKitten() {
  kittens.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}
