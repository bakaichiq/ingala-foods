export const state = () => ({
  isOpen: false
})

export const mutations = {
  toggleSidenav(state) {
    state.isOpen = !state.isOpen
  },
  closeSidenav(state) {
    state.isOpen = false
  }
}
