
// ===== Site Close Toggle =====
const CLOSE_SITE = false; // <-- Set to true to close site, false to open

document.addEventListener('DOMContentLoaded', function() {
		if (CLOSE_SITE && window.location.pathname !== '/closed.html') {
			// Always redirect to closed.html if site is closed and not already on closed.html
			window.location.replace('/closed.html');
			return;
		}
	if (!CLOSE_SITE && window.location.pathname === '/closed.html') {
		window.location.replace('https://zzaimii.com');
		return;
	}

	// (Optional) If you want to keep redirect for unknown paths when site is open:
	if (!CLOSE_SITE) {
		var allowedPrefixes = [
			'/',
			'/index.html',
			'/showcase',
			'/projects',
			'/portfolio',
			'/closed.html'
		];
		var path = window.location.pathname;
		var allowed = allowedPrefixes.some(function(prefix) {
			return path === prefix || path.startsWith(prefix + '/');
		});
		if (!allowed) {
			window.location.replace('/index.html');
		}
	}
});
