"use client"
import { Donation } from '@/app/(commonLayout)/CommonDesing/Card';
import React, { useEffect } from 'react';
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from 'lucide-react'
import { Editor, EditorState, RichUtils,ContentState  } from "draft-js";
import "draft-js/dist/Draft.css";

import { stateToHTML } from "draft-js-export-html";

const UpdateDonation = ({params}) => {
    const { causeId } = React.use(params);

    const [donationData, setDonationData] = useState(null);
    const [title, setTitle] = useState('')
    const [TargetAmount, setTargetAmount] = useState('')
    const [image, setImage] = useState() as any
    const [imagePreview, setImagePreview] = useState<string>('')
   
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [htmlContent, setHtmlContent] = useState("");
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://vivo-donation.vercel.app/api/v1/admin/get-donation/${causeId}`,
              {
                cache: "force-cache",
              }
            );
            const data = await response.json();
            
            setDonationData(data);
          } catch (error) {
            console.error("Error fetching donation data:", error);
          }
        };
    
        fetchData();
      }, [causeId]);

   
      const mainDonationData = donationData?.data as Donation;
      
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
          setImage(file)
          const reader = new FileReader()
          reader.onloadend = () => {
            setImagePreview(reader.result as string)
          }
          reader.readAsDataURL(file)
        }
      }
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
        
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', title);
        formData.append('target', TargetAmount);
        formData.append('description',  htmlContent);
        if (image) {
          formData.append('image', image);
        }
    
     
        
       
       
    
      }
      const stripHTMLTags = (html) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
      };
    
     
      useEffect(() => {
        if (mainDonationData?.description) {
          const plainText = stripHTMLTags(mainDonationData.description);
          const contentState = ContentState.createFromText(plainText);
          setEditorState(EditorState.createWithContent(contentState));
        }
      }, [mainDonationData?.description]);
    
     
      
     
      const toggleInlineStyle = (style) => {
    
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
      };
     
    
      const saveContentAsHTML = () => {
        const content = editorState.getCurrentContent();
        const html = stateToHTML(content);
        setHtmlContent(html); 
        
      };
    
    return (
        <div className='py-10 px-5 min-h-screen'>
        <Card className="w-full max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Create New Donation</CardTitle>
          </CardHeader>
          <CardContent >
  
            <form onSubmit={handleSubmit} className="space-y-6 py-5   ">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter donation title"
                value={ title ? title : mainDonationData?.title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
  
              <div className="space-y-2">
                <div className="flex justify-center">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <div className="min-w-[900px] h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      { mainDonationData?.image ? (
                        <Image
                          src={ 
                            imagePreview ? imagePreview : mainDonationData?.image
                          }
                          alt="Uploaded"
                          width={400}
                          height={400}
                          className="max-w-full max-h-full object-fill z-0"
                        />
                      ) : (
                        <span className="text-gray-500 z-30">
                          <PlusCircle />
                        </span>
                      )}
                    </div>
  
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                      aria-label="Upload an image"
                    />
                  </label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="TargetAmount">Target Amount</Label>
                  <Input
                    id="TargetAmount"
                    placeholder="Enter donation Target"
                   value={TargetAmount ? TargetAmount : mainDonationData?.target}
                    onChange={(e) => setTargetAmount(e.target.value)}
  
                    required
                  />
                </div>
  
                <div className="p-4 border rounded-md bg-gray-50 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold">Rich Text Editor</h2>
  
                 
                  <div className="mb-2 space-x-2 grid grid-cols-3 ">
                    <div
                      onClick={() => toggleInlineStyle("BOLD")}
                      
                      className="px-3 py-1 bg-blue-500 text-white rounded w-fit cursor-pointer"
                    >
                      Bold
                    </div>
                    <div
                      onClick={() => toggleInlineStyle("ITALIC")}
                      className="px-3 py-1 bg-green-500 text-white rounded w-fit  cursor-pointer"
                    >
                      Italic
                    </div>
                    <div
                      onClick={() => toggleInlineStyle("UNDERLINE")}
                      className="px-3 py-1 bg-purple-500 text-white rounded w-fit cursor-pointer"
                    >
                      Underline
                    </div>
                  </div>
  
                  {/* Editor */}
                  <div className="p-2 border rounded bg-white"
                    onMouseLeave={saveContentAsHTML}
                  >
                    <Editor
                       
                      editorState={editorState}
                      onChange={setEditorState}
                    
                      value={
                         mainDonationData?.description ? mainDonationData?.description : ''
                      }
                      
                      
                    />
                  </div>
  
                
  
                  {/* Display Saved HTML */}
                  {htmlContent && (
                    <div className="mt-4 p-2 border rounded bg-gray-100">
                      <h3 className="font-bold mb-2">HTML Content:</h3>
                      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                    </div>
                  )}
                </div>
  
              </div>
              <Button
               
              type="submit" className="w-full h-10 bg-mycustomcolors-secondary/80 hover:bg-mycustomcolors-secondary/80 
              
              
              ">Create Donation</Button>
            </form>
  
          </CardContent>
        </Card>
      </div>
    );
};

export default UpdateDonation;