import './Loader.css';
import logo from '../../assets/image/logo.gif';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <img alt="logo" src={logo} className="loader-wrapper__img" />
            {/* <div className="spinner center">
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
                <div className="spinner-blade"></div>
            </div> */}
        </div>
    );
};

export default Loader;
