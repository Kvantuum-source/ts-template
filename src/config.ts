import { join } from "path"
import nconf from "nconf"

export default (required: string[] = []): typeof nconf => {
	nconf
		.argv()
		.env()
		.file({
			file: join(__dirname, "/../config/default.json")
		})
		.required(required)
	return nconf
}
