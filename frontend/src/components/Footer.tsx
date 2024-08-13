const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Cat Sitters App</h4>
            <p className="text-gray-300 mt-2">
              Caring for your cats, just like family.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink">
              About Us
            </a>
            <a href="#" className="hover:text-pink">
              Contact
            </a>
            <a href="#" className="hover:text-pink">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-pink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.12c.725 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-pink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M24 4.557a9.9 9.9 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.945 13.945 0 011.671 3.149a4.917 4.917 0 001.524 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.923 4.923 0 004.6 3.417 9.868 9.868 0 01-6.102 2.105c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.557 2.213c9.054 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.004 10.004 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-pink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.35 3.608 1.325s1.263 2.242 1.325 3.608c.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.35 2.633-1.325 3.608s-2.242 1.263-3.608 1.325c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.35-3.608-1.325S2.225 18.666 2.163 17.3c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.35-2.633 1.325-3.608S5.968 2.225 7.334 2.163C8.599 2.105 8.979 2.163 12 2.163M12 0C8.741 0 8.332.012 7.052.07 5.769.128 4.519.435 3.446 1.509c-1.073 1.073-1.381 2.323-1.439 3.606C2.012 6.668 2 7.077 2 10.334v3.333c0 3.257.012 3.666.07 4.947.058 1.283.366 2.533 1.439 3.606 1.073 1.073 2.323 1.381 3.606 1.439 1.283.058 1.692.07 4.947.07s3.666-.012 4.947-.07c1.283-.058 2.533-.366 3.606-1.439 1.073-1.073 1.381-2.323 1.439-3.606.058-1.283.07-1.692.07-4.947v-3.333c0-3.257-.012-3.666-.07-4.947-.058-1.283-.366-2.533-1.439-3.606-1.073-1.073-2.323-1.381-3.606-1.439C15.666.012 15.257 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </svg>
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Feline Good. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
