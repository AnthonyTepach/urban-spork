import React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';


const Header = () => {
  const { user, error, isLoading } = useUser();

  return (
    <header className="bg-white shadow">
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-gray-800 font-medium text-xl">
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="/logo.svg"
                alt="Logo"
              />
              Mi Sitio
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <Link href="/escaneos">
                <span className="text-gray-800 hover:text-gray-600 px-3 py-2">
                  Escaneos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/reportes">
                <span className="text-gray-800 hover:text-gray-600 px-3 py-2">
                  Reportes
                </span>
              </Link>
            </li>
          </ul>
          {isLoading ? (
            <span>Cargando...</span>
          ) : error ? (
            <span>Ocurrió un error al cargar el usuario</span>
          ) : user ? (
            <Link href="/api/auth/logout">
              <span className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-full ml-4">
                Cerrar sesión
              </span>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <span className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full ml-4">
                Iniciar sesión
              </span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;