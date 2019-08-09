export function newProperty(state, action, property) {
  return action({
    type: "ADD_PROPERTY",
    property
  });
}

export function openDrawer(state, action, drawer) {
  return action({
    type: "OPEN_DRAWER",
    drawer
  });
}

export function closeDrawer(state, action) {
  return action({
    type: "CLOSE_DRAWER"
  });
}
