export function fetchUser() {
	return {
		type: "FETCH_USER_FULLILLED",
		payload: {
			name: "will",
			age: 26
		}
	}
}