import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface getProfileRating {
    profileId:string
    userId:string,
}
interface rateProfileProps {
    rate:number,
    profileId:string,
    feedback?:string,
    userId:string
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], getProfileRating>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        rateProfile: build.mutation<void, rateProfileProps>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
