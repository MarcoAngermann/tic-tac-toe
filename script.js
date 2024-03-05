let fields = [
    null,
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null,
];

function init () {
    render();
}

function render() {
    let content = document.getElementById('content');
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol;
            if (fields[index] === 'circle') {
                symbol = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateCrossSVG();
            } else {
                symbol = '';
            }
            tableHtml += `<td>${symbol}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    content.innerHTML = tableHtml;
}

function generateCircleSVG() {
    let width = 70;
    let height = 70;
    let color = "#00B0EF";

    const svgCode = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
            <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2 - 5}" fill="none" stroke="#FFFFFF" stroke-width="5">
                <animate attributeName="r" from="0" to="${width / 2 - 5}" dur="1s" fill="freeze" />
                <animate attributeName="stroke" from="#FFFFFF" to="${color}" dur="1s" fill="freeze" />
            </circle>
        </svg>
    `;
    return svgCode;
}

function generateCrossSVG() {
    let width = 70;
    let height = 70;
    let color = "#FEC146";

    const svgCode = `
        <svg class="cross" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="${color}" stroke-width="5" />
            <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="${color}" stroke-width="5" />
        </svg>
    `;
    return svgCode;
}

  
