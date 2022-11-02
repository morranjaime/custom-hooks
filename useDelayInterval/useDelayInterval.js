export const useDelayInterval = (func, delay) => {

    const action = () => new Promise((resolve, reject) => {
        try {
            func();
            resolve();
        } catch (error) {
            reject(error);
        }
    })

    const timeOut = () => {
        setTimeout(startInterval, delay)
    }

    const startInterval = () => {
        action().then(() => {
            timeOut()
        }).catch((error) => {
            console.log(error);
            timeOut()
        });
    }

    return {
        startInterval
    }
}