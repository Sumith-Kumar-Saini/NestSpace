import { type ComponentProps } from "react";
import { HeroImage as BGImage } from "@/utils/image";

interface CustomProps {
  styleBGActive?: boolean;
}

interface DivProps extends ComponentProps<"div">, CustomProps {}

const TestScroll: React.FC<DivProps> = ({
  children,
  styleBGActive = true,
  ...props
}) => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={
        styleBGActive
          ? {
              background: `rgba(${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          0.2)`,
            }
          : {
              backgroundImage: `url(${BGImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default TestScroll;
