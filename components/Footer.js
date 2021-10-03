

const Footer = () => {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
                <style jsx>{`
                    footer {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        }
                    `}
                </style>
            </div>
        </footer>
    )
}

export default Footer