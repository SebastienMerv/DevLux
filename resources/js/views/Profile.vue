<template>

    <AdminView>
    <Notification class="z-40"/>
        <form @submit.prevent="updateMe()">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base/7 font-semibold text-gray-900">{{ $t('admin.your_profile') }}</h2>
                    <p class="mt-1 text-sm/6 text-gray-600">{{ $t('admin.your_profile_description') }}</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div class="col-span-full">
                            <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="3" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                            <p class="mt-3 text-sm/6 text-gray-600">{{ $t('admin.about_description') }}</p>
                        </div>

                        <div class="col-span-full">
                            <label for="photo" class="block text-sm/6 font-medium text-gray-900">{{ $t('admin.photo') }}</label>
                            <div class="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" v-if="!user.profile_photo_path" />
                                <img
                                    :key="user.profile_photo_path"
                                    v-else :src="user.profile_photo_path" alt="Profile picture" class="object-cover h-12 w-12 rounded-full" />
                                <label for="file" class="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    {{$t('admin.change_picture')}}</label>
                                <input type="file" id="file" name="file" class="hidden" accept="image/*" v-on:change="updateProfilePicture($event)" />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base/7 font-semibold text-gray-900">{{ $t('admin.personal_information') }}</h2>
                    <p class="mt-1 text-sm/6 text-gray-600">{{ $t('admin.personal_information_description') }}</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm/6 font-medium text-gray-900">{{$t('first_name')}}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.firstName"
                                    type="text" name="first-name" id="first-name" autocomplete="given-name" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm/6 font-medium text-gray-900">{{$t('last_name')}}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.lastName"
                                    type="text" name="last-name" id="last-name" autocomplete="family-name" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">{{$t('email_address')}}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.email"
                                    id="email" name="email" type="email" autocomplete="email" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="country" class="block text-sm/6 font-medium text-gray-900">{{ $t('country') }}</label>
                            <div class="mt-2">
                                <select
                                    v-model="user.country"
                                    id="country" name="country" autocomplete="country-name" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm/6">
                                    <option v-for="country in countries" :key="country">{{ country }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="street-address" class="block text-sm/6 font-medium text-gray-900">{{ $t('street_address') }}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.address"
                                    type="text" name="street-address" id="street-address" autocomplete="street-address" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2 sm:col-start-1">
                            <label for="city" class="block text-sm/6 font-medium text-gray-900">{{ $t('city') }}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.city"
                                    type="text" name="city" id="city" autocomplete="address-level2" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="region" class="block text-sm/6 font-medium text-gray-900">{{$t('state')}}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.state"
                                    type="text" name="region" id="region" autocomplete="address-level1" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="postal-code" class="block text-sm/6 font-medium text-gray-900">{{$t('zip_code')}}</label>
                            <div class="mt-2">
                                <input
                                    v-model="user.postal_code"
                                    type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm/6 font-semibold text-gray-900">{{ $t('cancel') }}</button>
                <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">{{$t('save')}}</button>
            </div>
        </form>
    </AdminView>
</template>
<script setup lang="ts">
import AdminView from "@/components/Dashboard/AdminView.vue";
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import {useNotificationStore} from "@/stores/notificationStore";
import Notification from "@/components/Notification.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const notificationStore = useNotificationStore();

const countries = ['Belgique', 'France', 'United States']

const user = JSON.parse(localStorage.getItem('user'))

async function updateMe() {
    const response = await fetch('/api/auth/me', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const data = await response.json()

    if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data))
        notificationStore.showNotification({
            title: t('admin.profile_updated'),
            description: t('admin.profile_updated_description'),
            type: 'success'
        })
    }
}

async function updateProfilePicture(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('profile_photo', file);

    const response = await fetch('/api/auth/profile-photo', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
        },
        body: formData
    });

    const data = await response.json();

    if (response.ok) {
        notificationStore.showNotification({
            title: t('admin.profile_photo_updated'),
            description: t('admin.profile_photo_updated_description'),
            type: 'success'
        });

        localStorage.setItem('user', JSON.stringify(data));
        user.value = data;
    }
}

</script>
