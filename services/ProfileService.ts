import $api from "@/http/index";

type ProfileCreateFormData = {
  firstName: string;
  birthday: string;
  sex: string;
  height: number | null;
  weight: number | null;
  bodyBuild: string;
  eyeColor: string;
  aboutMe: string;
  interests: Array<string>;
  character: string;
  familyStatus: string;
  orientation: string;
  looking: Array<string>;
  qualities: Array<string>;
  partnerDesc: string;
};

type ProfileUpdateFormData = {
  firstName?: string;
  birthday?: string;
  sex?: string;
  height?: number | null;
  weight?: number | null;
  bodyBuild?: string;
  eyeColor?: string;
  aboutMe?: string;
  interests?: Array<string>;
  character?: string;
  familyStatus?: string;
  orientation?: string;
  looking?: Array<string>;
  qualities?: Array<string>;
  partnerDesc?: string;
};

export default class ProfileService {
  static async create(formData: ProfileCreateFormData) {
    const res = await $api
      .post("profile/create", formData)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  }
  static async update(formData: ProfileUpdateFormData) {}
}
