import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/Notification';

// NOTE: these are the _SAME_ API reference!
const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
