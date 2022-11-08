import "project-isaac-components/dist/tailwind.css";
import logo from "../assets/images/logo-white.png";
import bg from "../assets/images/bg.png";
import { SideDisplay } from "../components/ui/sider";
export default function Home() {
  return (
    <div>
      <SideDisplay logo={logo} background={bg} />
    </div>
  );
}
