import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./AsideProfile.module.scss";
import {Button} from "@/shared/ui/Button";
import OutIcon from "../../assets/outIcon.svg"
import AvatarIcon from "../../assets/header-avatar.svg"

interface AsideProfileProps {
  className?: string;
}

export const AsideProfile: FC<AsideProfileProps> = (props) => {
  const {className} = props;

  return (
    <div className={classNames(cls.AsideProfile, {}, [className])}>
      <div className={cls.avatarWrapper}>
        <AvatarIcon width={48} height={48}/>
      </div>
      <Button type="button" className={cls.logOut}>
        <OutIcon width={20} height={15} />
      </Button>
    </div>
  );
};

