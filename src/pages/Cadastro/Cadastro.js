import React from "react";
import FormUsuario from '../../components/forms/Cadastro/FormCadastro'
import styles from '../../components/forms/Cadastro/FormCadastro.module.css'

function Cadastro() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <FormUsuario/>
            </div>
        </div>
    )
}

export default Cadastro