import { ReactComponent as IconLogo } from '../../assets/images/icons/icon_logo.svg';
import { ReactComponent as IconHome } from '../../assets/images/icons/icon_home.svg';
import { ReactComponent as IconImage } from '../../assets/images/icons/icon_image.svg';
import { ReactComponent as IconContact } from '../../assets/images/icons/icon_contact.svg';
import { ReactComponent as IconRegistration } from '../../assets/images/icons/icon_registration.svg';
import { ReactComponent as IconLogIn } from '../../assets/images/icons/icon_log_in.svg';
import { ReactComponent as IconLogOut } from '../../assets/images/icons/icon_log_out.svg';
import { ReactComponent as IconUser } from '../../assets/images/icons/icon_user.svg';
import { ReactComponent as IconCloud } from '../../assets/images/icons/icon_cloud.svg';

import { IconWrapper } from './styles';

const iconMap: any = {
    logo: IconLogo,
    home: IconHome,
    image: IconImage,
    contact: IconContact,
    registration: IconRegistration,
    log_in: IconLogIn,
    log_out: IconLogOut,
    user: IconUser,
    cloud: IconCloud,
};

interface Props {
    name: string;
    csswidth: string;
    cssheight: string;
    color: string;
    onClick?: () => void;
}

function Icon({ name, csswidth, cssheight, color, onClick }: Props) {
    return (
        <IconWrapper
            onClick={onClick}
            as={iconMap[name]}
            $csswidth={csswidth}
            $cssheight={cssheight}
            $fill={color}
        />
    );
}

export default Icon;
