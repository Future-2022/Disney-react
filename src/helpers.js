export const parseSnapshot = callback => snapShot => {
	let data = []
	if (!snapShot.empty) {
		snapShot.forEach(doc => {
			data.push({
				id: doc.id,
				ref: doc.ref,
				...doc.data()
			})
		})
	}
	callback && callback(data)
}