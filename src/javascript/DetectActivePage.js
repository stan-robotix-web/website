// FONCTIONS JAVASCRIPT QUI PERMETTENT DE DÉTECTER SI ON EST SUR UNE CERTAINE PAGE
// but : highlight le bouton de la page sur lequel on se trouve

function getBasePath() {
	const pathArray = window.location.pathname.split("/");
	// Supposons que le chemin de base soit le nom du dépôt, ici 'website'
	return `/${pathArray[1]}`;
}

export function isActive(path) {
	const basePath = getBasePath();
	const currentPath = window.location.pathname;

	// Vérifiez si le chemin est la racine et que le path spécifié est '/home.html'
	if (currentPath === `${basePath}` && path === "/home.html") {
		return true;
	}
	return currentPath === path;
}
