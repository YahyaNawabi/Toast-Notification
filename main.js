function showToast(type) {
    const toastBox = document.getElementById('toastBox');
    const toast = document.createElement('div');
    toast.classList.add('toast', type);

    // Create a progress bar element
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    const progressSpan = document.createElement('span');
    progressBar.appendChild(progressSpan);

    switch(type) {
        case 'success':
            toast.innerText = 'Success! Operation completed.';
            break;
        case 'error':
            toast.innerText = 'Error! Something went wrong.';
            break;
        case 'invalid':
            toast.innerText = 'Invalid! Please try again.';
            break;
    }

    // Append progress bar to toast
    toast.appendChild(progressBar);

    // Append toast to the toast box
    toastBox.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}