export default function getVariable(name) {
    let value;

    const $pageContainer = (document.body || document.head || document.documentElement);
    const scriptContent =
        `if (typeof ${name} !== 'undefined') document.querySelector('body').setAttribute('tmp_${name}', JSON.stringify(${name}));\n`;

    const $script = document.createElement('script');
    $script.id = 'tmpScript';
    $script.appendChild(document.createTextNode(scriptContent));

    if ($pageContainer) {
        $pageContainer.appendChild($script);

        const jsonString = $pageContainer.getAttribute('tmp_' + name);

        if (jsonString) {
            try {
                value = JSON.parse(jsonString);
            } catch (e) {
                value = '';
            }
        }

        $pageContainer.removeAttribute('tmp_' + name);
        $script.remove();
    }

    return value;
}