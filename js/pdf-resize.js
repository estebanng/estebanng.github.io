function sizePdfObject(el, targetWidth, targetHeight, margin, threshold) {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var aspect = targetHeight / targetWidth;
    if (viewportWidth < threshold) {
        var width = viewportWidth - margin;
        el.style.width = width + 'px';
        el.style.height = (width * aspect) + 'px';
    } else {
        el.style.width = targetWidth + 'px';
        el.style.height = targetHeight + 'px';
    }
}

function initPdfObjects() {
    document.querySelectorAll('[data-pdf-width]').forEach(function (el) {
        sizePdfObject(
            el,
            Number(el.dataset.pdfWidth),
            Number(el.dataset.pdfHeight),
            Number(el.dataset.pdfMargin),
            Number(el.dataset.pdfThreshold)
        );
    });
}

window.addEventListener('load', initPdfObjects);
window.addEventListener('resize', initPdfObjects);
