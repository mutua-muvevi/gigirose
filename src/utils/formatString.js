import _ from "lodash";

export const truncateStr = (string, length) => {
	if (string.length <= length) {
		return string
	  }
	  return string.slice(0, length) + '...'
  }