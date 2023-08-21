import Link from "next/link";
const UsefulLink = ({ name, href }) => {
    return (
      <li>
        <Link href={href} className="whitespace-nowrap hover:text-orange-600">
          {name}
        </Link>
      </li>
    );
  };

export default UsefulLink;