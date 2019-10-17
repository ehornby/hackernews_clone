export const mapTime = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 0) {
        return `${interval} year${interval > 1 ? 's':''}`;
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 0 ) {
        return `${interval} month${interval > 1 ? 's':''}`;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 0) {
        return `${interval} day${interval > 1 ? 's':''}`;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 0) {
        return `${interval} hour${interval > 1 ? 's':''}`;
    }
    interval = Math.floor(seconds / 60);

    if (interval > 0) {
        return `${interval} minute${interval > 1 ? 's':''}`;
    }

    return `${Math.floor(seconds)} seconds`;  
};