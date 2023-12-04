import Property from "@/components/Property";
import { getListings } from "./utils/server";
import { IListing } from "@/models/Listing";

export default async function Home() {
  const listings = await getListings();

  return (
    <main>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mx-20">
        {listings.map((listing: IListing) => (
          <Property key={listing._id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
