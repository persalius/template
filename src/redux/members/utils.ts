export const createParamsOptions = (value: string): string => {
	const values = value.split(' ').filter((item) => item)
	let result = ''
	values.forEach((item) => {
		result = `${result}&name[]=${item}`
	})
	return result
}
