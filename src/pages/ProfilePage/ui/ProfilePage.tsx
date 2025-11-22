import { classNames } from '@/shared/lib/classNames/classNames';

import { Page } from '@/widgets/Page/Page';
import { ColumnFlex } from '@/shared/ui/Stack/ColumnFlex/ColumnFlex';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();
    return (
        <Page className={classNames('', {}, [className])}>
            <ColumnFlex gap="16" max>
                <EditableProfileCard id={id} />
            </ColumnFlex>
        </Page>
    );
};
