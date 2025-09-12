@@ .. @@
 import DirectoryPage from './pages/DirectoryPage';
+import ArtistsDirectoryPage from './pages/ArtistsDirectoryPage';
+import ArtistProfile from './pages/ArtistProfile';
 import TherapistProfile from './pages/TherapistProfile';
@@ .. @@
           <Route path="/directory" element={<DirectoryPage />} />
+          <Route path="/artists-directory" element={<ArtistsDirectoryPage />} />
           <Route path="/therapist/:id" element={<TherapistProfile />} />
+          <Route path="/artist/:id" element={<ArtistProfile />} />
           <Route path="/register-therapist" element={<RegisterTherapistPage />} />