<?php

namespace app\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $validated = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $e->errors(),
            ], 422);
        }

        if (auth()->attempt($validated)) {
            $user = auth()->user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token,
            ]);
        } else {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function updateMe(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email',
            'country' => 'nullable',
            'city' => 'nullable',
            'address' => 'nullable',
            'postal_code' => 'nullable',
            'state' => 'nullable',
            'about' => 'nullable',
        ]);

        $user = auth()->user();
        $user->update($validated);

        return response()->json($user);
    }

    public function updateProfilePhoto(Request $request)
    {
        $validated = $request->validate([
            'profile_photo' => 'required|image',
        ]);

        $user = auth()->user();
        // Store the profile photo in the storage/app/public/profile-photos directory
        $validated['profile_photo_path'] = $validated['profile_photo']->store('profile-photos', 'public');
        $user->update($validated);

        return response()->json($user);
    }
}
