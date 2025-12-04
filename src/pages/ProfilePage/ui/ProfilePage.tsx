import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ColumnFlex } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();
    return (
        <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
            <ColumnFlex gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </ColumnFlex>
        </Page>
    );
};
