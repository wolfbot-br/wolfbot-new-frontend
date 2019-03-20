import React from 'react'
import ReactTable from 'react-table'

const Tabela = (props) => {
    return (
        <ReactTable
            data={props.data}
            columns={props.columns}
            previousText='Anterior'
            nextText='Próximo'
            loadingText='Carregando...'
            noDataText='Não há dados!'
            pageText='Página'
            rowsText='linhas'
            ofText='de'
            pageSizeOptions={[props.data.length]}
            className='-striped -highlight'
            headerClassName='text-center'
            defaultPageSize={5}
        />
    )
}
export default Tabela