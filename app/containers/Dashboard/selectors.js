import { createSelector } from "reselect"
import _get from "lodash/get"
import _find from "lodash/find"
import _sortBy from "lodash/sortBy"
import _findIndex from "lodash/findIndex"

export const selectItems = state => state

export const selectData = state => state.test.items.data

export const selectOtherItems = (state) => {
  const data = state.getIn(["test", "items", "data"])
  return data && data.items
}
