export default function parrafo(domitem) {
    domitem.classList.add("d-flex", "flex-column");
    const html = `
        <p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste consectetur ut sint? Explicabo optio sapiente at sequi labore. Natus minima laboriosam in nemo a, reiciendis aut accusamus non ipsa?
        </p>
        <button class="btn btn-secondary" onclick="this.parentElement.innerHTML = ''"> Hide </button>
    `;
    domitem.innerHTML = html;
}