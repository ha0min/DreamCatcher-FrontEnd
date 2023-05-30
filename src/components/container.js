
const PageContainerWrapper = ({children}) => {
    return (
        <div
            style={{
                background: '#F5F7FA',
                height: '100vh',
                overflow: 'auto',

            }}
        >
            <div
                style={{
                    borderRadius: '5px',
                    background: 'white',
                    margin: '5% 10%',
                    padding: '2%',
                    borderColor: '#ebedf0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    boxShadow: '0 2px 8px #f0f1f2',
                }}
                >
                {children}
            </div>
        </div>
    )

}

export default PageContainerWrapper;