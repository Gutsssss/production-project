import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ColumnFlex } from '@/shared/ui/Stack/ColumnFlex/ColumnFlex';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/ProfileRating';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();
    return (
        <Page className={classNames('', {}, [className])}>
            <ColumnFlex gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </ColumnFlex>
        </Page>
    );
};
