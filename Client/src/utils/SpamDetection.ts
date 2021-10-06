export function setFormLimit(): void {
	const date = new Date();
	date.setTime(date.getTime() + 120 * 1000);
	const expires = "; expires=" + date.toUTCString();
	document.cookie = `formLimit=1${expires}; path=/`;
}

interface Cookie {
	name: string;
	value: number;
}
export function readFormLimit(): Cookie {
	if (document.cookie) {
		console.log("Relax with the spam D:");
	}
	const cookieData = document.cookie.split("=");
	return { name: cookieData[0], value: (cookieData[1] as unknown) as number };
}
