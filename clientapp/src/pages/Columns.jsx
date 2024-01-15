import { InputText } from "primereact/inputtext";

function Columns() {
    return (
        <section className="
            p-[32px] rounded-[20px] bg-secondary min-height-[60vh]
        ">
            <h1>Trouvez votre équipe</h1>

            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>
        </section>
    );
}

export default Columns;