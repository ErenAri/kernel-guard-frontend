import { Navigate, useLocation } from 'react-router-dom';
import { normalizeCanonicalPath } from '../config/site';

const FILE_LIKE_PATH = /\.[a-z0-9]+$/i;

export default function CanonicalPathRedirect() {
  const location = useLocation();

  // Static file-like requests should keep their original path shape.
  if (FILE_LIKE_PATH.test(location.pathname)) {
    return null;
  }

  const normalizedPathname = normalizeCanonicalPath(location.pathname);

  if (normalizedPathname === location.pathname) {
    return null;
  }

  const normalizedTarget = `${normalizedPathname}${location.search}${location.hash}`;

  return <Navigate to={normalizedTarget} replace />;
}