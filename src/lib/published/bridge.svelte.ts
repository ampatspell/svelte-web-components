export class Bridge {
	name = $state('hello');

	constructor() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window as any).bridge = this;
	}
}

export const bridge = new Bridge();
