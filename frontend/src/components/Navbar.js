import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Kanap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-responsive" aria-controls="navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-responsive">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
                        </li>
                    </ul>
                    <form className="d-flex mx-3">
                        <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Rechercher" />
                            <button className="btn btn-outline-success" type="submit">
                                <i className='fa fa-search' aria-hidden="true"></i>
                            </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
