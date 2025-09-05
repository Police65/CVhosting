/**
 * Parses the navigator.userAgent string to determine the visitor's browser,
 * operating system (OS), and device type.
 * @returns An object containing the detected browser, os, and device.
 */
export const parseUserAgent = (): { browser: string; os: string; device: string } => {
    const ua = navigator.userAgent;

    let browser = 'Unknown';
    let os = 'Unknown';
    let device = 'Desktop';

    // Detect Device Type
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
        device = 'Mobile';
    }

    // Detect Operating System
    if (/Windows/i.test(ua)) {
        os = 'Windows';
    } else if (/Macintosh|Mac OS X/i.test(ua)) {
        os = 'macOS';
    } else if (/Android/i.test(ua)) {
        os = 'Android';
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
        os = 'iOS';
    } else if (/Linux/i.test(ua)) {
        os = 'Linux';
    }

    // Detect Browser (order is important here)
    if (ua.indexOf('Edg/') > -1) {
        browser = 'Edge';
    } else if (ua.indexOf('Chrome/') > -1 && ua.indexOf('Safari/') > -1) {
        browser = 'Chrome';
    } else if (ua.indexOf('Firefox/') > -1) {
        browser = 'Firefox';
    } else if (ua.indexOf('Safari/') > -1 && ua.indexOf('Chrome/') === -1) {
        browser = 'Safari';
    } else if (ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
        browser = 'Internet Explorer';
    }
    
    return { browser, os, device };
};
