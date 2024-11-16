import { PETS } from "@/conts";
import { PetTab } from "@/enums";
import { fetchBreeds } from "@/services/server/fetchPets";
import { jsonResponse } from "@/services/server/jsonResponse";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ pet: PetTab }> },
) {
  const { pet: petParam } = await params;
  const pet = PETS.find((pet) => pet.tab === petParam);
  const headers = {
    "Content-Type": "application/json",
    "X-Top-Secret-Api-Key": "not_here_eather_muahaha",
  };
  if (!pet)
    return jsonResponse(
      { error: true, data: null },
      { status: 404, statusText: "Not Found", headers },
    );
  const searchParams = request.nextUrl.searchParams;
  const limit = Number(searchParams.get("limit")) || 20;
  const page = Number(searchParams.get("page"));
  const search = searchParams.get("search");
  const { data } = await fetchBreeds({
    animal: pet.tab,
    page,
    limit,
    search: search,
  });
  return jsonResponse(
    {
      data,
      pagination: {
        limit,
        page,
        nextPage: search ? null : data.length === limit ? page + 1 : null,
      },
    },
    {
      status: 200,
      headers,
    },
  );
}
