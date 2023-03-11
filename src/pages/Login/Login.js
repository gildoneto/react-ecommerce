import React from "react";
import FormLogin from '../../components/forms/Login/FormLogin'
import styles from '../../components/forms/Cadastro/FormCadastro.module.css'

function Cadastro() {
    return(
        <div>
            <div className={styles.FormCadastro}>
                <FormLogin/>
            </div>
        </div>
    )
}

export default Cadastro