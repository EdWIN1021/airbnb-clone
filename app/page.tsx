import Property from "@/components/Property";
import { IListing } from "@/models/Listing";
import { getListings } from "@/utils/server";

export default async function Home() {
  const listings = await getListings();

  return (
    <main>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 px-20">
        {listings.map((listing: IListing) => (
          <Property key={listing._id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
